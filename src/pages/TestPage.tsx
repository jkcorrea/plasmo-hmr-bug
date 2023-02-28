const TestPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>Change me</h1>
      <p>{'data'}</p>
    </div>
  )
}

export const blah = () => {
  return delay(1000, 'this breaks hmr')
}

export default TestPage

function delay(ms: number, ...args: any[]) {
  return new Promise((resolve) => setTimeout(resolve, ms, args))
}
