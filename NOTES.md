# Notes Regarding the exercise

## ⚙️ Initial Setup

### 🚧 First things first :wrench:

As stated on the interview, the project was not runnnig.

The first thing I did was to update the depencies.

#### ➕➕➕ Dependencies

Since this is a simple project, updating all the dependencies to the latest version should not be a problem.
Based on the latest version of expo-create-app, I updated the dependencies to the following versions:

```json
"dependencies": {
    "@react-navigation/native": "^5.9.4",
    "@react-navigation/stack": "^5.14.5",
    "expo": "~41.0.1",
    "expo-status-bar": "~1.0.4",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": ""
    "react-native-gesture-handler": "~1.10.2",
    "react-native-reanimated": "~2.1.0",
    "react-native-screens": "~3.0.0",
    "react-native-safe-area-context": "3.2.0",
    "react-native-web": "~0.13.12"
  },

```

Not moving to expo router was a decision based on the fact that the project was already set up with react-navigation.
And the core idea of the project was to build a simple menu and shopping cart.

#### ESLint and Prettier

.eslintrc.json and .prettierrc were also update in order to use the latest version of the plugins.

#### Imports and File Extensions

All the screens and components were using js file extensions. I changed them to jsx since this is a React project.

### Running the project

With all the dependencies updated, fixes to the imports and file extensions, the project was able to run without any issues.

## ➕ New Dependencies

### @expo/vector-icons

Just added to use the shopping cart icon on the `Header` in a simple way.
