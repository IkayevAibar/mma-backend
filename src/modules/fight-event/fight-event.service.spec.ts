import { Test, TestingModule } from '@nestjs/testing';
import { FightEventService } from './fight-event.service';

describe('FightEventService', () => {
  let service: FightEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FightEventService],
    }).compile();

    service = module.get<FightEventService>(FightEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
