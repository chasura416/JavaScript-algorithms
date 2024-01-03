#include<stdio.h>
int main() {
	int alphabet[26];
	char word[101];
	int i, idx;
	scanf("%s", word);

	for (i = 0; i < 26; i++)
		alphabet[i] = -1;

	for (i = 0; word[i] != '\0'; i++) {
		idx = word[i] - 97;
		if (alphabet[idx] == -1){
			alphabet[idx] = i;	
		}
	}
	
	for (i = 0; i < 26; i++)
		printf("%d ", alphabet[i]);

	return 0;
}