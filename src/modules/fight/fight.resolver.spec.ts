import { Test, TestingModule } from '@nestjs/testing';
import { FightResolver } from './fight.resolver';

describe('FightResolver', () => {
  let resolver: FightResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FightResolver],
    }).compile();

    resolver = module.get<FightResolver>(FightResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
