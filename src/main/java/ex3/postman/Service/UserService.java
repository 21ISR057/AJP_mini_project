package ex3.postman.Service;

import java.util.List;
import java.util.Optional;

import ex3.postman.Model.User;

public interface UserService {
  public List<User> getAllUsers();

  public Optional<User> getUserById(long id);

  public String addUser(User user);

  public String updateUser(long id, User user);

  public String deleteUser(long id);
}