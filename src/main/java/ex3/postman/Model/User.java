package ex3.postman.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  private String name;
  // private String dob;
  // private String gen;
  // private String art;
  private String mail;
  private int ph;
  private String arive;
  private String depart;
  private String room;
  private String bed;
}
