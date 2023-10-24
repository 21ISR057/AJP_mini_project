package ex3.postman.UserController;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ex3.postman.Model.User;
import ex3.postman.Service.UserService;
import ex3.postman.UserRepository.UserRepository;

@RestController
public class UserController {
  @Autowired
  UserService userService;
  UserRepository userRepository;

  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }

  @GetMapping("/get-user/{id}")
  public Optional<User> getUserById(@PathVariable long id) {
    return userService.getUserById(id);
  }

  @PostMapping("/add-user")
  public String addUser(@RequestBody User user) {
    // userRepository.save(user);
     return userService.addUser(user);
    // return "Inserted";

  }

  @PutMapping("/update-user/{id}")
  public String updateUserById(@PathVariable long id, @RequestBody User user) {
    System.out.println(user);
    return userService.updateUser(id, user);
  }

  @DeleteMapping("/delete-user/{id}")
  public String deleteUser(@PathVariable long id) {
    return userService.deleteUser(id);
  }
}

