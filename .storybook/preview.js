import '../src/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div className="bg-white p-6 sm:p-8 md:p-10">
      <Story />
    </div>
  ),
]
