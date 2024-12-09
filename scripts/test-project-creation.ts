// scripts/test-project-creation.ts
async function testCreateProject() {
  try {
    const response = await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Portfolio Website',
        description: 'A modern portfolio built with Nuxt 3 and Vue',
        technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'PostgreSQL'],
        image: '/images/portfolio.png',
        expandedContent: 'A detailed look at my portfolio website...',
        expandedTech: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'PostgreSQL',
          'Drizzle ORM',
          'TailwindCSS',
        ],
        linkTo: 'https://your-portfolio.com',
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const project = await response.json()
    console.log('Created project:', project)
  }
  catch (error) {
    console.error('Error:', error)
  }
}

testCreateProject()
