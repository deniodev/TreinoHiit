// Função para exportar o treino como PDF
export async function exportPDF(exercises) {
  // Importar jsPDF e html2canvas dinamicamente para evitar problemas de SSR
  const { jsPDF } = await import("jspdf")
  const html2canvas = (await import("html2canvas")).default

  return new Promise(async (resolve, reject) => {
    try {
      // Criar um elemento temporário para renderizar o treino
      const tempElement = document.createElement("div")
      tempElement.className = "pdf-export"
      tempElement.style.width = "210mm"
      tempElement.style.padding = "10mm"
      tempElement.style.backgroundColor = "white"
      tempElement.style.color = "black"
      tempElement.style.position = "absolute"
      tempElement.style.left = "-9999px"

      // Adicionar cabeçalho
      const header = document.createElement("div")
      header.innerHTML = `
        <h1 style="font-size: 24px; margin-bottom: 10px; text-align: center;">Treno HIIT - Seu Treino Personalizado</h1>
        <p style="font-size: 14px; margin-bottom: 20px; text-align: center;">Criado em: ${new Date().toLocaleDateString()}</p>
        <hr style="margin-bottom: 20px;">
      `
      tempElement.appendChild(header)

      // Adicionar exercícios
      const exercisesList = document.createElement("div")
      exercisesList.style.marginBottom = "20px"

      if (exercises.length === 0) {
        exercisesList.innerHTML = '<p style="text-align: center;">Nenhum exercício adicionado ao treino.</p>'
      } else {
        exercises.forEach((exercise, index) => {
          const exerciseItem = document.createElement("div")
          exerciseItem.style.marginBottom = "15px"
          exerciseItem.style.padding = "10px"
          exerciseItem.style.border = "1px solid #ddd"
          exerciseItem.style.borderRadius = "5px"

          const mode = exercise.duration ? "time" : "reps"
          const value = mode === "time" ? `${exercise.duration} segundos` : `${exercise.repetitions} repetições`

          exerciseItem.innerHTML = `
            <h2 style="font-size: 18px; margin-bottom: 5px;">${index + 1}. ${exercise.nome}</h2>
            <p style="font-size: 14px; margin-bottom: 5px;">Categoria: ${exercise.categoria.charAt(0).toUpperCase() + exercise.categoria.slice(1)}</p>
            <p style="font-size: 14px; margin-bottom: 5px;">Nível: ${
              exercise.nivel === "iniciante"
                ? "Iniciante"
                : exercise.nivel === "intermediario"
                  ? "Intermediário"
                  : "Avançado"
            }</p>
            <p style="font-size: 14px; margin-bottom: 5px;"><strong>${mode === "time" ? "Duração" : "Repetições"}:</strong> ${value}</p>
            <p style="font-size: 14px;"><strong>Músculos trabalhados:</strong> ${exercise.musculos.join(", ")}</p>
          `

          exercisesList.appendChild(exerciseItem)
        })
      }

      tempElement.appendChild(exercisesList)

      // Adicionar rodapé
      const footer = document.createElement("div")
      footer.style.borderTop = "1px solid #ddd"
      footer.style.paddingTop = "10px"
      footer.style.fontSize = "12px"
      footer.style.textAlign = "center"
      footer.innerHTML = "Treno HIIT - www.trenohiit.com"
      tempElement.appendChild(footer)

      // Adicionar o elemento ao DOM
      document.body.appendChild(tempElement)

      // Renderizar o elemento como canvas
      const canvas = await html2canvas(tempElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      // Remover o elemento temporário
      document.body.removeChild(tempElement)

      // Criar o PDF
      const pdf = new jsPDF("p", "mm", "a4")
      const imgData = canvas.toDataURL("image/png")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const ratio = canvas.width / canvas.height
      const imgWidth = pdfWidth
      const imgHeight = imgWidth / ratio

      // Adicionar a imagem ao PDF
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

      // Se o conteúdo for maior que uma página, adicionar mais páginas
      if (imgHeight > pdfHeight) {
        let heightLeft = imgHeight
        let position = 0

        pdf.addPage()
        heightLeft -= pdfHeight
        position -= pdfHeight

        while (heightLeft >= 0) {
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
          heightLeft -= pdfHeight
          position -= pdfHeight

          if (heightLeft >= 0) {
            pdf.addPage()
          }
        }
      }

      // Salvar o PDF
      pdf.save("treno-hiit-treino.pdf")

      console.log("PDF gerado com sucesso!")
      resolve(true)
    } catch (error) {
      console.error("Erro ao gerar PDF:", error)
      reject(error)
    }
  })
}
