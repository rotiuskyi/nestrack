import { Module, Scope } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import nestrackDbConfig from "./config/nestrack-db.config";
import mikroOrmConfig from "./config/mikro-orm.config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { UserProfilesModule } from "./user-profiles/user-profiles.module";
import { AppLoggerInterceptor } from "./app-logger/app-logger.interceptor";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nestrackDbConfig],
      envFilePath: ["config/.env.dev"],
      isGlobal: true,
    }),
    MikroOrmModule.forRootAsync({
      useFactory: mikroOrmConfig,
      inject: [ConfigService],
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
