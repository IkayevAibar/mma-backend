import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FighterModule } from './modules/fighter/fighter.module';
import { FightEventModule } from './modules/fight-event/fight-event.module';
import { FightModule } from './modules/fight/fight.module';
import { RankingService } from './modules/ranking/ranking.service';
import { RankingResolver } from './modules/ranking/ranking.resolver';
import { RankingModule } from './modules/ranking/ranking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: false,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
    }),
    FighterModule,
    FightEventModule,
    FightModule,
    RankingModule,
  ],
  providers: [RankingService, RankingResolver],
})
export class AppModule {}
