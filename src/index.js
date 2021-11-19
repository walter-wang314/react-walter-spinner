const func = () => {
  const stu = { name: 'walter', age: 19 }
  const stuName = stu?.name
  const stuAge = stu?.age
  return 'name: ' + stuName + ' age:: ' + stuAge
}

export default func
