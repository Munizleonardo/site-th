import nodemailer from "nodemailer";

// ✅ Handler principal do método POST
export async function POST(req: Request) {
  try {
    // Lê o corpo da requisição
    const { nome, telefone, cpfCnpj, cidade, bairro, cep, chassiplaca } = await req.json();

    // 🚫 Verificação simples de campos obrigatórios
    if (!nome || !telefone || !cpfCnpj || !cidade || !bairro || !cep || !chassiplaca) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400 }
      );
    }

    // ✉️ Configuração do transporte de e-mail (via Gmail ou outro)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📬 Monta o conteúdo do e-mail
    const mailOptions = {
      from: `"Cotação de Seguro Auto" <${process.env.EMAIL_USER}>`,
      to: "munizzleonardo@gmail.com", // ✅ Altere se quiser enviar para outro e-mail
      subject: "🚘 NOVA SOLICITAÇÃO - SEGURO AUTO",
      html: `
        <h2>Nova Solicitação de Seguro Auto</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>CPF/CNPJ:</strong> ${cpfCnpj}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Bairro:</strong> ${bairro}</p>
        <p><strong>CEP:</strong> ${cep}</p>
        <p><strong>Chassi/Placa:</strong> ${chassiplaca}</p>
      `,
    };

    // 🚀 Envia o e-mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "E-mail de cotação enviado com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
    return new Response(
      JSON.stringify({ error: "Falha ao enviar o e-mail." }),
      { status: 500 }
    );
  }
}