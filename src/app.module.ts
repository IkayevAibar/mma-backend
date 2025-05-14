import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FighterModule } from './modules/fighter/fighter.module';
import { FightEventModule } from './modules/fight-event/fight-event.module';
import { FightModule } from './modules/fight/fight.module';
import { RankingModule } from './modules/ranking/ranking.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.orm.{ts,js}'],
      synchronize: false,
      autoLoadEntities: true,
      migrations: [__dirname + '/migrations/*.{ts,js}'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
    }),
    EventEmitterModule.forRoot(),
    FighterModule,
    FightEventModule,
    FightModule,
    RankingModule,
  ],
})
export class AppModule {}
