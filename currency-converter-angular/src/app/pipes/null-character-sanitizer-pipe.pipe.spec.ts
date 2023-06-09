import { NullCharacterSanitizerPipePipe } from './null-character-sanitizer-pipe.pipe';

describe('NullCharacterSanitizerPipePipe', () => {
  it('create an instance', () => {
    const pipe = new NullCharacterSanitizerPipePipe();
    expect(pipe).toBeTruthy();
  });
});
