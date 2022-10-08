    public static Integer num(int m, int n, int[][] matrix){
        int result = 0;
        matrix = proc(m,n,matrix);
        boolean isContinue = true;
        while(isContinue){
            boolean isChanged = false;
            // 按周围拥挤情况降序搜索
            for(int i = 4; i >= 0; i--) {
                // 足够拥挤且可以分配
                if(find(m,n,matrix,i)){
                    result++;
                    isChanged = true;
                    break;
                }
            }
            if(!isChanged)
                isContinue = false;
        }
        return result;
    }

    // 处理周围座位
    public static int[][] proc(int m, int n, int[][] matrix){
        int[][] copy = new int[m][n];
        for(int i = 0; i < m; i++){
            copy[i] = Arrays.copyOf(matrix[i], n);
        }
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(matrix[i][j] == 1){
                    if(i-1 >= 0) copy[i-1][j] = 1;
                    if(i+1 < m) copy[i+1][j] = 1;
                    if(j-1 >= 0) copy[i][j-1] = 1;
                    if(j+1 < n) copy[i][j+1] = 1;
                }
            }
        }
        return copy;
    }

    // 寻找符合条件的座位
    public static boolean find(int m, int n, int[][] matrix, int up){
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(matrix[i][j] == 0){
                    int x = 0;
                    if(i-1 < 0 || matrix[i-1][j]==1) x++;
                    if(i+1 >= m || matrix[i+1][j]==1) x++;
                    if(j-1 < 0 || matrix[i][j-1]==1) x++;
                    if(j+1 >= n || matrix[i][j+1]==1) x++;

                    if(x == up){
                        matrix[i][j] = 1;
                        if(i-1 >= 0) matrix[i-1][j] = 1;
                        if(i+1 < m) matrix[i+1][j] = 1;
                        if(j-1 >= 0) matrix[i][j-1] = 1;
                        if(j+1 < n) matrix[i][j+1] = 1;
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // 主函数
    public static void main(String[] args) {
        // 输入
        Scanner scanner = new Scanner(System.in);
        int m = scanner.nextInt();
        int n = scanner.nextInt();
        int[][] matrix = new int[m][n];
        for(int i = 0; i<m; i++){
            int[] l = new int[n];
            for(int j=0; j<n; j++){
                l[j] = (scanner.nextInt());
            }
            matrix[i] = l;
        }
        // 输出
        System.out.println(num(m,n,matrix));
    }