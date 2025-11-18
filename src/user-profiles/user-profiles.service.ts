import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityManager, EntityRepository } from "@mikro-orm/core";
import { CreateUserProfileDto } from "./dto/create-user-profile.dto";
import { UpdateUserProfileDto } from "./dto/update-user-profile.dto";
import { AuthService } from "../auth/auth.service";
import { UserProfile } from "./entities/user-profile.entity";

@Injectable()
export class UserProfilesService {
  constructor(
    private readonly authService: AuthService,

    @InjectRepository(UserProfile)
    private readonly userProfileRepository: EntityRepository<UserProfile>,
    private readonly em: EntityManager,
  ) {}

  async create(createUserProfileDto: CreateUserProfileDto) {
    const { hashedPassword, salt } = await this.authService.hashPassword(
      createUserProfileDto.password,
    );

    const userProfile = this.userProfileRepository.create({
      login: createUserProfileDto.login,
      email: createUserProfileDto.email,
      password: hashedPassword,
      salt,
    });

    await this.em.persistAndFlush(userProfile);

    return userProfile;
  }

  async findAll() {
    return await this.userProfileRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfile`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserProfileDto: UpdateUserProfileDto) {
    return `This action updates a #${id} userProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProfile`;
  }
}
