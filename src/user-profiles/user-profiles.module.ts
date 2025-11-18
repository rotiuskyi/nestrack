import { Module } from "@nestjs/common";
import { UserProfilesService } from "./user-profiles.service";
import { UserProfilesController } from "./user-profiles.controller";
import { AuthModule } from "../auth/auth.module";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { UserProfile } from "./entities/user-profile.entity";

@Module({
  imports: [AuthModule, MikroOrmModule.forFeature([UserProfile])],
  controllers: [UserProfilesController],
  providers: [UserProfilesService],
})
export class UserProfilesModule {}
