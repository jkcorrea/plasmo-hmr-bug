const TestPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-xl">Change me</h1>
    </div>
  )
}

export const blah = () => {
  console.log('exporting this breaks HMR')
}

export default TestPage
