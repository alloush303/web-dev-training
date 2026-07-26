import { CurenccyConverter } from "./CurenccyConverter";

describe('test function curenccy converter', () => {
    test('ضرب القيمة المدخلة ب 13000', () => {
        expect(CurenccyConverter(1)).toBe(13000)

        expect(CurenccyConverter(5)).toBe(65000)

        expect(CurenccyConverter(0)).toBe(0)
    })
})