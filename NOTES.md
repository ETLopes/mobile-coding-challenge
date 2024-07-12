# Notes Regarding the Exercise

## ⚙️ Initial Setup

### 🚧 First things first :wrench:

As stated in the interview, the project was not runnig.

The first thing I did was to update the dependencies.

#### ➕➕➕ Dependencies

Since this is a simple project, updating all the dependencies to the latest version should not be a problem.
Based on the latest version of expo-create-app, I updated the dependencies to the following versions:

```json
"dependencies": {
    "@react-native-community/masked-view": "0.1.11",
    "@react-navigation/native": "6.1.7",
    "@react-navigation/stack": "6.4.0",
    "expo": "51.0.20",
    "expo-status-bar": "1.12.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.3",
    "react-native-gesture-handler": "2.16.1",
    "react-native-reanimated": "3.10.1",
    "react-native-safe-area-context": "4.10.1",
    "react-native-screens": "3.31.1",
    "react-native-web": "0.19.10"
  },
```

Also, I've locked the versions of the dependencies in order to avoid any issues with path updates that could potentially lead to problems running the app.

#### 🚧🚧🚧 React Navigation

Not moving to expo router was a decision based on the fact that the project was already set up with react-navigation.
And the core idea of the project was to build a simple menu and shopping cart.

#### ESLint and Prettier

.eslintrc.json and .prettierrc were also updated in order to use the latest version of the plugins. I've not changed the rules.

#### Imports and File Extensions

All the screens and components were using js file extensions. I changed them to jsx since this is a React project.

### Running the Project

With all the dependencies updated, fixes to the imports and file extensions, the project was able to run without any issues.

## ➕ New Dependencies

### @expo/vector-icons

Added to the project in order to use icons on the `Header` and also for `Plus` and `Minus` signs.

## Decisions

### 📄 Screens

The Screens folder contains the `Menu` and `ShoppingCart` screens. They hold the logic of the screens. I've used the concept of Presentational and Container components. Although it's not enforced by the community anymore, I still like to use this concept and hooks would be an overhead here. [Dan Abramov's blog post about it with the comments on why not](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### 📦 Components

I've used the `components` folder in order to store all the components that are being used in the project. All the components are stateless.

### 🎨 Styles

The styles are defined in separate files and imported into the components where they are used. This approach helps in maintaining a clean separation of concerns and makes it easier to manage and update styles.

The styles are organized in the `styles` folder, with separate files for different parts of the application, such as `shoppingCart`, `menu` and `banner`.

### 🌐 Context API

I've used the Context API to manage the state of the shopping cart. This way, I can avoid prop drilling and make the state available to all the components that need it.

## Future Changes

### Unit Tests 🧪

First thing would be adding unit tests to the project. This would help in ensuring that the code works as expected and would make it easier to refactor the code in the future.
The only reason why I didn't add tests is because of the scope.

### Typescript 🛠️

I would add Typescript to the project. This would help in catching errors at compile time and make the code more robust.

### Styling 🎨

I don't have a strong opinion on this topic, but this could go either with a tailwind css approach but it could also go with a plain css approach, creating Components and Screen Templates with it.

### Additional notes

There are also a lot of topics related to CI/CD, pre-push checks, other kinds of tests(E2E, visual regression, etc), code-coverage, etc. that could be added to the project.
