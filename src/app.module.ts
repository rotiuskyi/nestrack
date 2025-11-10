import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { UserProfilesModule } from "./user-profiles/user-profiles.module";
import appConfig from "./app.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      envFilePath: ["config/.env.dev"],
    }),
    UserProfilesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
