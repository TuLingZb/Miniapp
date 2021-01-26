from docx import Document
import os
# 定义word内容修改函数
def make_file():
    document=Document(r'/Users/zhangbai/Desktop/tt.docx')
    print(document)

if __name__ == "__main__":
    make_file()