package com.networkbench.newlens.datacollector.browser.util;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import java.util.Base64;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

public class DES3Util {
	private final static Logger logger = LoggerFactory.getLogger(DES3Util.class);
	private static final String Algorithm = "DESede"; // 定义 加密算法,可用  DES,DESede,Blowfish
	private static final int DEFAULT_CACHE_INITIAL_CAPACITY = 10000;
	private final static long DEFAULT_CACHE_EXPIRATION = 2;
	private static LoadingCache<String,String> keyCache;
	static{
		keyCache = CacheBuilder.newBuilder().concurrencyLevel(4)
				.initialCapacity(DEFAULT_CACHE_INITIAL_CAPACITY)
				.expireAfterWrite(DEFAULT_CACHE_EXPIRATION, TimeUnit.HOURS)
				.build(new CacheLoader<String,String>() {
					@Override
					public String load(String key) throws Exception {
						return decryptMode(null, key);
					}
				});
	}
	/*
	private static final  byte[] keyBytes = { 0x11, 0x22, 
            0x4F, 0x58, 
            (byte) 0x88, 
            0x10, 0x40, 
            0x38, 0x28, 
            0x25, 0x79,
            0x51, (byte) 0xCB,
            (byte) 0xDD, 0x55,
            0x66, 0x77, 
            0x29, 0x74, 
            (byte) 0x98, 
            0x30, 0x40, 
            0x36, (byte) 0xE2 
            }; // 24字节的密钥
	*/
	
	private static final  byte[] keyBytes = { (byte) 0x86, (byte) 0x10, (byte) 0xF3, (byte) 0x22, 
									            (byte) 0x01, (byte) 0x16, (byte) 0x08, (byte) 0x31, 
									            (byte) 0xE2, (byte) 0x30, (byte) 0xF8, (byte) 0x62, 
									            (byte) 0xB9, (byte) 0xB0, (byte) 0x02, (byte) 0x36,
									            (byte) 0x9F, (byte) 0x12, (byte) 0xEB, (byte) 0x81, 
									            (byte) 0x06, (byte) 0x7F, (byte) 0x54, (byte) 0x3F 
									          }; // 24字节的密钥
	
	public DES3Util(){
		// 添加新安全算法,如果用JCE就要把它添加进去
		Security.addProvider(new com.sun.crypto.provider.SunJCE());
	}

	/**
	 * 加密处理
	 * @param simple
	 * @return
	 */
	public static String base64UrlEncode(String encryption) {
		String s = encryption; // Regular base64 encoder
		// Remove any trailing '='s
		for(int i = Math.max(s.length() - 4, 0); i < encryption.length(); ++i) {
			if(s.charAt(i) == '=') {
				s = s.substring(0, i);
				break;
			}
		}
		 
		s = s.replace('+', '-'); // 62nd char of encoding
		s = s.replace('/', '_'); // 63rd char of encoding
		return s;
	}

	/**
	 * 解密处理
	 * @param cipher
	 * @return
	 */
	public static String base64UrlDecode(String cipher) {
		String s = cipher;
		s = s.replace('-', '+'); // 62nd char of encoding
		s = s.replace('_', '/'); // 63rd char of encoding
		switch (s.length() % 4) { // Pad with trailing '='s
		case 0:
			break; // No pad chars in this case
		case 2:
			s += "==";
			break; // Two pad chars
		case 3:
			s += "=";
			break; // One pad char
		default:
			System.err.println("Illegal base64url String!");
		}
		return s;
	}
	/**
	 * 加密
	 * 
	 * @param src
	 *            被加密的数据缓冲区（源）
	 * @return
	 */
	public static String encryptMode(String src) throws NoSuchAlgorithmException, NoSuchPaddingException, IOException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
		return encryptMode(null, src);
	}

	/**
	 * 解密
	 * 
	 * @param keybyte加密密钥
	 *            ，长度为24字节oo
	 * @param src
	 *            加密后的缓冲区
	 * @return
	 */
	public static String decryptMode(String src) throws NoSuchAlgorithmException, NoSuchPaddingException, IOException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
		try {
			return keyCache.get(src);
		} catch (ExecutionException e) {
			return decryptMode(null, src);
		}
	}

	/**
	 * 加密
	 * 
	 * @param keybyte
	 *            加密密钥，长度为24字节
	 * @param src
	 *            被加密的数据缓冲区（源）
	 * @return
	 */
	@SuppressWarnings("restriction")
	public static String encryptMode(byte[] keybyte, String src) throws NoSuchAlgorithmException, NoSuchPaddingException, IOException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
		if (keybyte == null || keybyte.length == 0) {
			keybyte = keyBytes;
		}
		if (src == null || src.length() == 0) {
			return null;
		}
		SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
		Cipher cipher = Cipher.getInstance(Algorithm);
		cipher.init(Cipher.ENCRYPT_MODE, deskey);
		
		byte[] encryptByte = cipher.doFinal(src.getBytes());
		if (encryptByte != null && encryptByte.length > 0) {
			return base64UrlEncode(Base64.getEncoder().encodeToString(encryptByte));
		}
		return null;
	}

	/**
	 * 解密
	 * 
	 * @param keybyte加密密钥
	 *            ，长度为24字节
	 * @param src
	 *            加密后的缓冲区
	 * @return
	 */
	@SuppressWarnings("restriction")
	public static String decryptMode(byte[] keybyte, String src) throws NoSuchAlgorithmException, NoSuchPaddingException, IOException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException {
		// 删除无效字符
		if (src.indexOf("\\") > -1) {
			src = src.replace("\\", "");
		}

		if (keybyte == null || keybyte.length == 0) {
			keybyte = keyBytes;
		}
		byte[] encodedByte = null;
		if (src != null && src.length() > 0) {
			encodedByte = Base64.getDecoder().decode(base64UrlDecode(src));
		} else {
			return null;
		}
		SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
		Cipher cipher = Cipher.getInstance(Algorithm);
		cipher.init(Cipher.DECRYPT_MODE, deskey);
		return new String(cipher.doFinal(encodedByte));
	}

	public static void main(String[] args) throws IOException {
		try {
			System.out.println("加密:" + encryptMode(keyBytes, "35674"));
			System.out.println("解密:" + decryptMode(keyBytes, "wTz3sseO3uA"));
			System.out.println("解密:" + decryptMode(keyBytes, "\\/saXLqM3qGI="));
			System.out.println("解密:" + decryptMode(keyBytes, "\\\\/saXLqM3qGI="));
			System.out.println("解密:" + decryptMode(keyBytes, "+C\\/slSuJk8U="));
			
		} catch (InvalidKeyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (BadPaddingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalBlockSizeException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
