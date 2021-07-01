let num = 0;

export default function genId() {
  return new Date() + "" + num++;
}
