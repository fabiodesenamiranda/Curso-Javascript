class AlunosService{
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("Aluno must be a instance of AlunoModel")
        }
        this.alunos.push(aluno)
        
    }    

    
    edit(aluno){
        return aluno
    }

}