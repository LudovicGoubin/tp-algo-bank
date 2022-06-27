alert("Bienvenue chez GTM Bank");

const yOverdraft = document.getElementById("#y");
const noOverdraft = document.getElementById("#n");
const inputOverdraft = document.querySelector(`input[type="text"]`);

yOverdraft.addEventListener("select", withOverdraft());
noOverdraft.addEventListener("select", withoutOverdraft());

inputOverdraft.addEventListener("input", (e) => {
  inputOverdraft = e.target.value;
});
