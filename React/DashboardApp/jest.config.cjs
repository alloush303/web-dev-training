module.exports = {
    testEnvironment: 'jest-environment-jsdom', // محاكاة بيئة المتصفح
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // ملف تشغيل الإعدادات قبل كل اختبار
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // لتجاهل ملفات التنسيق أثناء الاختبار (تحتاج تثبيت الحزمة إذا استخدمتها)
    },
};
