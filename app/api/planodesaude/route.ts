import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { nome, telefone, cpfCnpj, cidade, bairro, qtdVidas, idades } = data;

    // 🔒 Configuração do e-mail — use variáveis de ambiente em produção
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou smtp.office365.com, smtp.hostinger.com, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Corpo do e-mail
    const mailOptions = {
      from: `"Cotação de Plano de Saúde" <${process.env.EMAIL_USER}>`,
      to: "thiago@thtecnologia.com.br", // 🔹 Mude para o e-mail que vai receber
      subject: "🩺 NOVA SOLICITAÇÃO - PLANO DE SAÚDE 🩺",
      html: `
        <h2>Nova Solicitação - Plano de Saúde</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>CPF/CNPJ:</strong> ${cpfCnpj}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Bairro:</strong> ${bairro}</p>
        <p><strong>Quantidade de vidas:</strong> ${qtdVidas}</p>
        <p><strong>Idades:</strong> ${idades}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "E-mail enviado com sucesso!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(JSON.stringify({ message: "Erro ao enviar e-mail." }), {
      status: 500,
    });
  }
}
