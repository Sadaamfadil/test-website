document.getElementById('rollButton').addEventListener('click', function () {
  // Memainkan suara tombol
  const buttonSound = document.getElementById('buttonSound');
  buttonSound.play();

  // Daftar hadiah dengan peluang dan gambar
  const items = [
    { name: "Pedang Legendaris", chance: 5, image: "sword.png" },
    { name: "Perisai Langka", chance: 15, image: "shield.png" },
    { name: "Potion Penyembuhan", chance: 30, image: "potion.png" },
    { name: "Koin Emas", chance: 50, image: "gold.png" },
  ];

  // Menghasilkan angka acak antara 0-100
  const randomNumber = Math.random() * 100;
  let gachaCount = 5;
  let cumulativeChance = 0;
  let obtainedItem = { name: "Tidak ada hadiah", image: "" };

  // Menentukan hadiah berdasarkan peluang
  for (const item of items) {
    cumulativeChance += item.chance;
    if (randomNumber <= cumulativeChance) {
      obtainedItem = item;
      break;
    }
  }

  // Menampilkan hasil
  const resultText = document.getElementById('resultText');
  const itemImage = document.getElementById('itemImage');

  resultText.textContent = `Kamu mendapatkan: ${obtainedItem.name}`;
  if (obtainedItem.chance <= 5){
    const winSound = document.getElementById('winSound');
    winSound.play(); // Memainkan suara kemenangan
  } else {
    itemImage.style.display = "none";
  }
  if(obtainedItem.image){itemImage.src = obtainedItem.image;
    itemImage.style.display = "block";}
  
});