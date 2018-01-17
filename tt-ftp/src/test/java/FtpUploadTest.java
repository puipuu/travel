import com.group.travel.ftp.util.FtpUtils;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.junit.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * User: Shinelon
 * Date: 2018/1/17
 * Time: 19:37
 * Version:V1.0
 */
public class FtpUploadTest {
    @Test
    public void testFtpUpload() throws IOException {
        //创建FTPClient客户端
        FTPClient ftpClient = new FTPClient();
        //创建FTP连接
        ftpClient.connect("120.79.155.43",21);
        //登录
        ftpClient.login("ftpuser","cxq19941217");
        //读取本地文件
        FileInputStream fileInputStream = new FileInputStream(new File("C:\\Users\\Shinelon\\Desktop\\5T3)(EJIU0OM)KV5~4{H837.jpg"));
        //配置上传参数
        ftpClient.changeWorkingDirectory("/home/ftpuser/www/images");
        ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
        //上传文件
        ftpClient.storeFile("hello.jpg",fileInputStream);
        //关闭连接
        fileInputStream.close();
        ftpClient.logout();

    }

    @Test
    public void testFtpUtil() throws FileNotFoundException {
        FileInputStream fileInputStream = new FileInputStream(new File("C:\\Users\\Shinelon\\Desktop\\5T3)(EJIU0OM)KV5~4{H837.jpg"));
        FtpUtils.uploadFile("120.79.155.43",21,"ftpuser","cxq19941217","/home/ftpuser/www/images","/2017/09/11","hello2.jpg",fileInputStream);
    }

}
