import { Test, TestingModule } from '@nestjs/testing';
import { FightEventResolver } from './fight-event.resolver';

describe('FightEventResolver', () => {
  let resolver: FightEventResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FightEventResolver],
    }).compile();

    resolver = module.get<FightEventResolver>(FightEventResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
