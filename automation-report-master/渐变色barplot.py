# import matplotlib.pyplot as plt
# import numpy as np
# fig, ax = plt.subplots()
# ax.set(xlim=(0,10), ylim=(0,1), autoscale_on=False)
# a = np.array([[1, 1],
#               [2, 2]])
### 纵向：
# N = 5
# x = np.arange(N) + 0.15
# y = [1, 1, 1, 1, 1]
# width = 0.5
# for x, y in zip(x, y):
#     ax.imshow(a, interpolation='bicubic', extent=(x, x+width, 0, y), cmap=plt.cm.YlOrRd_r) #YlOrRd_r, RdYlGn_r
# ax.set_aspect('auto')
# plt.show()

import matplotlib.pyplot as plt
from PIL import ImageFont, ImageDraw, Image
from matplotlib.ticker import FuncFormatter
import numpy as np
def to_percent(temp, position):
    return '%1.0f'%(100*temp) + '%'


plt.rcParams['font.sans-serif']=['SimHei']
plt.rcParams['axes.unicode_minus'] = False
fig, ax = plt.subplots()
ax.set(xlim=(0,1), ylim=(0,-13), autoscale_on=False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['top'].set_visible(False)
a = np.array([[2, 1],
              [2, 1]])
### 横向：
N = 5
y = [-1, -3.5, -6, -8.5, -11]
x = [1, 1, 1, 1, 1]
width = -1.2
for x, y in zip(x, y):
    ax.imshow(a, interpolation='bicubic', extent=(0, x, y, y+width), cmap=plt.cm.Spectral) #YlOrRd_r, RdYlGn_r, Oranges_r


xfont = ['早期肠癌', '早期肝癌', '早期肺癌', '早期胃癌', ' 泛癌 ']
xfont_pos = [0.01, 0.01, 0.01, 0.01, 0.01]
xc = [0.298458645, 0.125353483, 0.623495768, 0.351236598, 0.256011958]
y = [-1, -3.5, -6, -8.5, -11]
ax.set_aspect('auto')
line = plt.scatter(xc, y,c='black',marker='^')
line.set_zorder(1)   
ax.add_line(line)
for xi, y in zip(range(0, len(xfont_pos)), y):
    if(xc[xi] > 0.55):
        ax.annotate(xfont[xi] + '  （中风险）',xy=(xfont_pos[xi], y-1.3), fontsize='xx-large')
    else:
        ax.annotate(xfont[xi] + '  （低风险）',xy=(xfont_pos[xi], y-1.3), fontsize='large')


plt.yticks([])
plt.gca().xaxis.set_major_formatter(FuncFormatter(to_percent))
plt.show()