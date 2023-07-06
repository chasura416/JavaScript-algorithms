#include<stdio.h>
int main() {
	int n, i, j, tmp, sum = 0;
	int A[51], B[51];

	scanf("%d", &n);

	for (i = 0; i < n; i++) {
		scanf("%d", &A[i]);
	}
	for (i = 0; i < n; i++) {
		scanf("%d", &B[i]);
	}

	for (i = 0; i < n; i++) {
		for (j = 0; j < n - 1; j++) {
			if (A[j] > A[j + 1]) {
				tmp = A[j];
				A[j] = A[j + 1];
				A[j + 1] = tmp;
			}
		}
	}
	for (i = 0; i < n; i++) {
		for (j = 0; j < n - 1; j++) {
			if (B[j] < B[j + 1]) {
				tmp = B[j];
				B[j] = B[j + 1];
				B[j + 1] = tmp;
			}
		}
	}

	for (i = 0; i < n; i++) {
		sum += (A[i] * B[i]);
	}

	printf("%d\n", sum);

	return 0;
}