/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

import java.util.Iterator;
import java.util.LinkedList;

/**
 *
 * @author KHAICK O. BRITO
 */
public class Vertex {

    private LinkedList<Edge> edgeList;
    private boolean isReachable;
    private boolean isVisited;

    public Vertex() {
        edgeList = new LinkedList();
        isReachable = true;
        isVisited = false;
    }

    public LinkedList<Edge> getEdgeList() {
        return edgeList;
    }

    public void setEdgeList(LinkedList edgeList) {
        this.edgeList = edgeList;
    }

    public void addEdge(int weight, Vertex origin, Vertex destiny) {
        Edge edge = new Edge(weight, origin, destiny);
        edgeList.add(edge);
    }

    public void deleteEdge(int origin, int end) {
        Iterator it = edgeList.iterator();
        int i = 0;
        while (it.hasNext()) {
            Edge edge = (Edge) it.next();
            if (edge.getStartVertex().equals(origin) && edge.getEndVertex().equals(end)) {
                edgeList.remove(i);
            }
            i++;
        }
    }

    public boolean isReachable() {
        return isReachable;
    }

    public void setIsReachable(boolean isReachable) {
        this.isReachable = isReachable;
    }

    public boolean isVisited() {
        return isVisited;
    }

    public void setIsVisited(boolean isVisited) {
        this.isVisited = isVisited;
    }
    
    

}
