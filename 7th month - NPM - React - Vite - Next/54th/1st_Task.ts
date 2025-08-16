const tasks = [

  {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},

  {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},

  {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},

  {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},

  {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},

  {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},

  {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},

];

const frontendTime = () => {
        const values = tasks.filter(task => task.category === 'Frontend').reduce((sum, task) => sum + task.timeSpent, 0)
    return values
}

const bugTime = () => {
        const values = tasks.filter(task => task.type === 'bug').reduce((sum, task) => sum + task.timeSpent, 0)
    return values
}

const uiCheck = () => {
        const values = tasks.filter(task => task.title.includes('UI')).length
    return values
}

const objectFrontBack = () => {
    return tasks.reduce((count,task) => {
        count[task.category] = (count[task.category] || 0) + 1;
        return count
    }, {} as Record<string,number>)
}

const longTask = () => {
        const values = tasks.filter(task => task.timeSpent > 4.0).map(task => ({title: task.title, category: task.category}))
        return values
}

console.log(`Общее количество времени затраченное на работу над задачами из категории 'Frontend' : ${frontendTime()} `)
console.log(`Общее количество времени, затраченное на работу над задачами типа 'bug' : ${bugTime()} `)
console.log(`Количество задач, имеющих в названии слово "UI" : ${uiCheck()} `)
console.log(`Получите количество задач каждой категории: : ${JSON.stringify(objectFrontBack())} `)
console.log(`Массив задач с затраченным временем больше 4 часов. В массиве должны быть объекты только с ключами title и category. : ${JSON.stringify(longTask())} `)