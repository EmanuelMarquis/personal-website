package dev.emanuelmarquis;

import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.staticfiles.Location;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class Server {
    private static String staticFilesDir;
    // args[0] : static files directory
    public static void main(String[] args) {
        Server.staticFilesDir = args[0];
        final var app = Javalin.create(config -> {
            config.staticFiles.add(args[0], Location.EXTERNAL);
        })
        .get("/", ctx -> {
            try { serverHtml(ctx, Server.staticFilesDir + "/index.html"); }
            catch (IOException e) { System.out.println(e.getMessage()); }
        })
        .get("/components", Server::serveComponents)
        .start(8000);
    }

    private static void serverHtml(
            @NotNull Context ctx,
            @NotNull String filePath
    ) throws IOException {
        ctx.html(new String(
                new FileInputStream(filePath).readAllBytes(),
                StandardCharsets.UTF_8)
        );
    }

    private static void serveComponents(@NotNull Context ctx) {
        try {
            if(ctx.header("component").equals("bento-box")) serverHtml(ctx,Server.staticFilesDir + "/components/bento-box.html");
            else ctx.html("<p>unkown requested component!</p>");
        } catch (IOException | NullPointerException e) { System.out.println(e.getMessage()); }
    }
}