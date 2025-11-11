import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { UserProfilesModule } from "./user-profiles/user-profiles.module";
import appConfig from "./app.config";
import { AppLoggerInterceptor } from "./app-logger/app-logger.interceptor";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      envFilePath: ["config/.env.dev"],
    }),
    UserProfilesModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AppLoggerInterceptor,
      scope: Scope.REQUEST,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
