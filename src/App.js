const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pagar", async (req, res) => {

  const { token, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.kushkipagos.com/card/v1/charges",
      {
        token: token,
        amount: {
          subtotalIva: 0,
          subtotalIva0: amount,
          ice: 0,
          iva: 0,
          currency: "USD"
        }
      },
      {
        headers: {
          "Private-Merchant-Id": "TU_PRIVATE_KEY"
        }
      }
    );

    res.json(response.data);

  } catch (error) {
    res.status(400).json(error.response.data);
  }
});

app.listen(3001, () => console.log("Servidor corriendo"));
