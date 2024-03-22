module.exports = {
	branches: ['master'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git',
		[
			'@semantic-release/github',
			{
				assets: [
					{
						path: 'dist/*.js',
						label: 'JS Bundle',
					},
					{
						path: 'dist/*.d.ts',
						label: 'Type Definitions',
					},
				],
			},
		],
	],
};
