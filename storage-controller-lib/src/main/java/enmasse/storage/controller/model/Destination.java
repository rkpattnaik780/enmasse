package enmasse.storage.controller.model;

/**
 * Represents a single destination in the addressing config. It is identified by the address, but contains
 * additional properties that determine the semantics.
 */
public final class Destination {
    private final String address;
    private final boolean storeAndForward;
    private final boolean multicast;
    private final String flavor;

    public Destination(String address, boolean storeAndForward, boolean multicast, String flavor) {
        this.address = address;
        this.storeAndForward = storeAndForward;
        this.multicast = multicast;
        this.flavor = flavor;
    }

    public String address() {
        return address;
    }

    public boolean storeAndForward() {
        return storeAndForward;
    }

    public boolean multicast() {
        return multicast;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Destination destination = (Destination) o;
        return address.equals(destination.address);

    }

    @Override
    public int hashCode() {
        return address.hashCode();
    }

    public String flavor() {
        return flavor;
    }
}
