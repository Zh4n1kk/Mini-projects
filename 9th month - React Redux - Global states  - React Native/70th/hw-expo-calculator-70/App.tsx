import { Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import useCalc from './store/store';


export default function App() {
  const nums = ['1','2','3','4','5','6','7','8','9','0']
  const funcs = ['+','-','/','*','<','CE','=','.']
  
  const expression = useCalc((state) => state.expression)
  const setExpression = useCalc((state) => state.setExpression)

  const handleClick = (val: string) => {
    if (val === 'CE') {
      setExpression('')
    } else if (val === '<') {
      setExpression(expression.slice(0, -1))
    } else if (val === '=') {
      let exp = expression
      const lastChar = exp.slice(-1)
      if (funcs.includes(lastChar)) {
        exp = exp.slice(0,-1)
        }
      try {
        setExpression(eval(exp).toString())
      } catch {
        setExpression('Error')
      }
    } else if (funcs.includes(val)) {
      const lastChar = expression.slice(-1)
      if (funcs.includes(lastChar)) {
        setExpression(expression.slice(0,-1) + val)
      } else {
      setExpression(expression + val)
      }
    } else {
      setExpression(expression + val)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.number}>
        <Text style={styles.number}>{expression ? expression : 0}</Text>
      </View>
        {nums.map((el) => (<Pressable key={el} style={styles.buttonCalc} onPress={() => handleClick(el)}><Text style={styles.buttonCalcText}>{el}</Text></Pressable>))}
        {funcs.map((el) => (<Pressable key={el} style={styles.buttonCalcFuncs} onPress={() => handleClick(el)}><Text style={styles.buttonCalcFuncText}>{el}</Text></Pressable>))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  buttonCalc: {
    width: '16.656%',
    aspectRatio: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonCalcFuncs: {
    width: '16.656%',
    aspectRatio: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    fontSize: 36,
  },
  number: {
    width: '100%',
    fontSize: 36,
    textAlign: 'right'
  },
  buttonCalcFuncText: {
    fontSize: 24,
  },
  buttonCalcText: {
    fontSize: 24,
  }
});
