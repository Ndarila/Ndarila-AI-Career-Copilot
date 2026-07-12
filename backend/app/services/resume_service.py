import fitz  # PyMuPDF


def extract_resume_text(file) -> str:
    """
    Extract text from a PDF resume.
    """

    pdf = fitz.open(stream=file.file.read(), filetype="pdf")

    text = ""

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text