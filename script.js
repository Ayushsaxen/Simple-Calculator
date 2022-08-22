function valueButton(e){
    calculatorform.screen.value += e.value;

}
function Clear()
{
    calculatorform.screen.value = null;
}
function Calculate()
{
    calculatorform.screen.value = eval(calculatorform.screen.value)
}