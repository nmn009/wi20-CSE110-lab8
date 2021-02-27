const formatVolumeIconPath = require('../assets/scripts/main')

describe('Volume Icon for level 3', () => {
    test('highest in range is 100', () => {
        expect(formatVolumeIconPath(100)).toContain('./assets/media/icons/volume-level-3.svg');
    });

    test('smallest in range is 67', () => {
        expect(formatVolumeIconPath(67)).toContain('./assets/media/icons/volume-level-3.svg');
    });

    test('somewhere middle in range is 80', () => {
        expect(formatVolumeIconPath(80)).toContain('./assets/media/icons/volume-level-3.svg');
    });
});

describe('Volume Icon for level 2', () => {
    test('highest in range is 66', () => {
        expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('smallest in range is 34', () => {
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('somewhere middle in range is 50', () => {
        expect(formatVolumeIconPath(50)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
});

describe('Volume Icon for level 1', () => {
    test('highest in range is 33', () => {
        expect(formatVolumeIconPath(33)).toContain('volume-level-1');
    });

    test('smallest in range is 1', () => {
        expect(formatVolumeIconPath(1)).toContain('volume-level-1');
    });

    test('somewhere middle in range is 30', () => {
        expect(formatVolumeIconPath(30)).toContain('volume-level-1');
    });
});

describe('Volume Icon for level 0', () => {
    test('highest in range is 0', () => {
        expect(formatVolumeIconPath(0)).toContain('volume-level-0');
    });
});