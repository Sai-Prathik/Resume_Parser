from pdfminer.high_level import extract_text  
import io

def pdfFileHandler(fileReader): 
    text = extract_text(io.BytesIO(fileReader))
    print(text)