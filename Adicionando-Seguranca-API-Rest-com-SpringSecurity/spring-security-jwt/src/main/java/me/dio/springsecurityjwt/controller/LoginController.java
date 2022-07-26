package me.dio.springsecurityjwt.controller;

import me.dio.springsecurityjwt.dto.LoginDto;
import me.dio.springsecurityjwt.dto.SessaoDto;
import me.dio.springsecurityjwt.model.User;
import me.dio.springsecurityjwt.repository.UserRepository;
import me.dio.springsecurityjwt.security.JWTCreator;
import me.dio.springsecurityjwt.security.JWTObject;
import me.dio.springsecurityjwt.security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class LoginController {

    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private SecurityConfig securityConfig;
    @Autowired
    private UserRepository repository;

    @PostMapping("/login")
    public SessaoDto logar(@RequestBody LoginDto login){
        User user = repository.findByUsername(login.getUsername());
        if(user!=null) {
            boolean passwordOk =  encoder.matches(login.getPassword(), user.getPassword());
            if (!passwordOk) {
                throw new RuntimeException("Senha inválida para o login: " + login.getUsername());
            }
            //Estamos enviando um objeto Sessão para retornar mais informações do usuário
            SessaoDto sessao = new SessaoDto();
            sessao.setLogin(user.getUsername());

            JWTObject jwtObject = new JWTObject();
            jwtObject.setIssuedAt(new Date(System.currentTimeMillis()));
            jwtObject.setExpiration((new Date(System.currentTimeMillis() + 3600000)));
            jwtObject.setRoles(user.getRoles());
            sessao.setToken(JWTCreator.create("Bearer", "SECRET_KEY", jwtObject));
            return sessao;
        }else {
            throw new RuntimeException("Erro ao tentar fazer login!");
        }
    }

}
