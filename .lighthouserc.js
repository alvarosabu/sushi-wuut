module.exports = {
  ci: {
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.93 }],
      },
    },
    collect: {
      staticDistDir: './.output/public',
      url: ['http://localhost/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
