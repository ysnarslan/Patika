def flatten(nested_list, out=None):
    if out is None:
        out = []
    for i in nested_list:
        if (type(i) == list):
            flatten(i, out)
        else:
            out.append(i)
    return out


def my_reverse(input_list):
    input_list.reverse()
    for i in input_list:
        if (type(i) == list):
            my_reverse(i)




deneme = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]
flatten_list = flatten(deneme)
print(flatten_list)
deneme2 = [[1, 2], [3, 4], [[5, [6], 7], 8], 9]
my_reverse(deneme2)
print(deneme2)