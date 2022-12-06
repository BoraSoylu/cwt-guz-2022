export default function TestFunc(a) {
  const test = document.createElement('div');
  test.textContent = 'This element was returend from components/TestFunc';
  test.classList.add(a);
  return test;
}
