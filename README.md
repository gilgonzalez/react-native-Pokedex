# react-native-Pokedex

![Muestra 1](https://raw.githubusercontent.com/gilgonzalez/react-native-Pokedex/main/asset/Captura.PNG)
![Muestra 2](https://raw.githubusercontent.com/gilgonzalez/react-native-Pokedex/main/asset/Captura1.PNG)
![Muestra 3](https://raw.githubusercontent.com/gilgonzalez/react-native-Pokedex/main/asset/Captura2.PNG)

En el proyecto hay ejemplos de tab, stacks, animaciones, debounce, llamadas a API, manejo de datos etc

#AÑADIR FONTS 
===============
1. Create a fonts directory in your project's root directory.
2. Place the custom font files (e.g., .ttf or .otf files) inside the fonts directory.
3. Create a react-native.config.js file in your project's root directory if it doesn't already exist.
4. In the react-native.config.js file, add the following code to specify the path of the fonts folder:
  this is inside of react-native.config.js
  module.exports = {
  assets: ['./fonts'],
};

5. Open a terminal and run the command npx react-native-asset to link the font assets to your project. This command will copy the font files to the respective native directories and make the required changes.
6. After running the command, you should see the font files in the android/app/src/main/assets/fonts directory for Android and the changes in the Info.plist file for iOS.
7. You can now use the custom fonts in your React Native components by specifying the fontFamily style attribute with the font's name. For example:

***I DONT KNOW WHY, BUT USING STYLESHEET, IT DOESNT WORK,*** SO YOU HAVE TO USE INLINE STYLES LIKE <Text style= {{fontFamily: 'Pokemon'}}/>
